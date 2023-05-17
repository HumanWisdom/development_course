import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116084tPage } from './s116084t.page';

describe('S116084tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116084tPage;
  let fixture: ComponentFixture<S116084tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116084tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116084tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
