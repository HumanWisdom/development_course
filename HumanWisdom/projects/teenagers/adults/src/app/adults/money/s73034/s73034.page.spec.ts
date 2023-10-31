import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73034Page } from './s73034.page';

describe('S73034Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73034Page;
  let fixture: ComponentFixture<S73034Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73034Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73034Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
