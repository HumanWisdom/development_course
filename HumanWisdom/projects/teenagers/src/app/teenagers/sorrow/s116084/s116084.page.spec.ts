import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116084Page } from './s116084.page';

describe('S116084Page', () => {
      
    let component:  S116084Page;
  let fixture: ComponentFixture<S116084Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116084Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116084Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
