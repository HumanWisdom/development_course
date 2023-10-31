import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25018Page } from './s25018.page';

describe('S25018Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25018Page;
  let fixture: ComponentFixture<S25018Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25018Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25018Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
