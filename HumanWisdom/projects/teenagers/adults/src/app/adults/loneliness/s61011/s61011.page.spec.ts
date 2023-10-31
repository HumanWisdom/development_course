import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61011Page } from './s61011.page';

describe('S61011Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61011Page;
  let fixture: ComponentFixture<S61011Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61011Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61011Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
