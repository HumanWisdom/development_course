import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53027Page } from './s53027.page';

describe('S53027Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53027Page;
  let fixture: ComponentFixture<S53027Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53027Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53027Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
