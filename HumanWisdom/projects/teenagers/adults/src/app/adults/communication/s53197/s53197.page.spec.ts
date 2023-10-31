import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53197Page } from './s53197.page';

describe('S53197Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53197Page;
  let fixture: ComponentFixture<S53197Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53197Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53197Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
