import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60011Page } from './s60011.page';

describe('S60011Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60011Page;
  let fixture: ComponentFixture<S60011Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60011Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60011Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
