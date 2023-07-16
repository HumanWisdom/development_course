import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132111Page } from './s132111.page';

describe('S132111Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132111Page;
  let fixture: ComponentFixture<S132111Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132111Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132111Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
