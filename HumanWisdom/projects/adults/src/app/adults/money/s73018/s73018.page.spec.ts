import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73018Page } from './s73018.page';

describe('S73018Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73018Page;
  let fixture: ComponentFixture<S73018Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73018Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73018Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
