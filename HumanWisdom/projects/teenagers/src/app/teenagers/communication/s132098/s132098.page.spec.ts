import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132098Page } from './s132098.page';

describe('S132098Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132098Page;
  let fixture: ComponentFixture<S132098Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132098Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132098Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
