import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53192Page } from './s53192.page';

describe('S53192Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53192Page;
  let fixture: ComponentFixture<S53192Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53192Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53192Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
