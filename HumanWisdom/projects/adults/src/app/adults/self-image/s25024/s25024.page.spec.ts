import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25024Page } from './s25024.page';

describe('S25024Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25024Page;
  let fixture: ComponentFixture<S25024Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25024Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25024Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
