import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53074Page } from './s53074.page';

describe('S53074Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53074Page;
  let fixture: ComponentFixture<S53074Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53074Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53074Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
