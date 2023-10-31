import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57047Page } from './s57047.page';

describe('S57047Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57047Page;
  let fixture: ComponentFixture<S57047Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57047Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57047Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
