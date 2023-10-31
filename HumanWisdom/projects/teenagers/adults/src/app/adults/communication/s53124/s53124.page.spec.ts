import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53124Page } from './s53124.page';

describe('S53124Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53124Page;
  let fixture: ComponentFixture<S53124Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53124Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53124Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
