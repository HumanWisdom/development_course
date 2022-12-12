import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57052Page } from './s57052.page';

describe('S57052Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57052Page;
  let fixture: ComponentFixture<S57052Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57052Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57052Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
