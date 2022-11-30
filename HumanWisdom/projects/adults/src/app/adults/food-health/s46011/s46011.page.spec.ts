import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46011Page } from './s46011.page';

describe('S46011Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46011Page;
  let fixture: ComponentFixture<S46011Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46011Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46011Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
