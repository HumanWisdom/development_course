import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73027Page } from './s73027.page';

describe('S73027Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73027Page;
  let fixture: ComponentFixture<S73027Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73027Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73027Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
