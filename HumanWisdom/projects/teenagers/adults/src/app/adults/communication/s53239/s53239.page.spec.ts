import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53239Page } from './s53239.page';

describe('S53239Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53239Page;
  let fixture: ComponentFixture<S53239Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53239Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53239Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
