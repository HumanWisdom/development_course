import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53015Page } from './s53015.page';

describe('S53015Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53015Page;
  let fixture: ComponentFixture<S53015Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53015Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53015Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
