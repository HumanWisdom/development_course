import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53075Page } from './s53075.page';

describe('S53075Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53075Page;
  let fixture: ComponentFixture<S53075Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53075Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53075Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
