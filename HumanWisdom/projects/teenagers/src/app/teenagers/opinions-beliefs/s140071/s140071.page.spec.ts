import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140071Page } from './s140071.page';

describe('S140071Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140071Page;
  let fixture: ComponentFixture<S140071Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140071Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140071Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
