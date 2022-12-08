import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53023Page } from './s53023.page';

describe('S53023Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53023Page;
  let fixture: ComponentFixture<S53023Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53023Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53023Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
