import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S28003Page } from './s28003.page';

describe('S28003Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S28003Page;
  let fixture: ComponentFixture<S28003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S28003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S28003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
