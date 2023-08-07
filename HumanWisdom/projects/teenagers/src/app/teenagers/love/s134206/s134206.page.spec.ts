import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134206Page } from './s134206.page';

describe('S134206Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134206Page;
  let fixture: ComponentFixture<S134206Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134206Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134206Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
