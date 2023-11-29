import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132094Page } from './s132094.page';

describe('S132094Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132094Page;
  let fixture: ComponentFixture<S132094Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132094Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132094Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
