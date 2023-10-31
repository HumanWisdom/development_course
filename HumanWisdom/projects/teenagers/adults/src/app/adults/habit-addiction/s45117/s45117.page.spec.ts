import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45117Page } from './s45117.page';

describe('S45117Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45117Page;
  let fixture: ComponentFixture<S45117Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45117Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45117Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
