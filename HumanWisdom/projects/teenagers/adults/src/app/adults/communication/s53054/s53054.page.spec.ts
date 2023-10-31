import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53054Page } from './s53054.page';

describe('S53054Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53054Page;
  let fixture: ComponentFixture<S53054Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53054Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53054Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
