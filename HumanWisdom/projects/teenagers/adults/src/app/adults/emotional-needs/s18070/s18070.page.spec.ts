import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18070Page } from './s18070.page';

describe('S18070Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18070Page;
  let fixture: ComponentFixture<S18070Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18070Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18070Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
