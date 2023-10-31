import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53043Page } from './s53043.page';

describe('S53043Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53043Page;
  let fixture: ComponentFixture<S53043Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53043Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53043Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
