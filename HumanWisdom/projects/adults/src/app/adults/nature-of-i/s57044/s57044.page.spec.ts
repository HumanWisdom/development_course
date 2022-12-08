import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57044Page } from './s57044.page';

describe('S57044Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57044Page;
  let fixture: ComponentFixture<S57044Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57044Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57044Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
